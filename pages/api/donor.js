import clientPromise from "../../lib/mongodb";
import { ObjectId } from "mongodb";
import { DoneOutlineSharp } from "@material-ui/icons";

export default async function handler(req, res) {
  if (req.method === 'POST') {
    console.log('POST', req.body)
    return postDonation(req, res)
  }
  if (req.method === 'GET') {
    // get donors
    return getDonors(req, res)
  }

  if (req.method === 'PUT') {
    // get donors
    return updateDonor(req, res)
  }

    // Return a response to acknowledge receipt of the event.
   
   else {
    res.setHeader('Allow', 'POST', 'GET', 'PUT');
    res.status(405).json({ message: 'Method not allowed' });
  }
}

export const postDonation = async (req, res) => {
  const client = await clientPromise;
  const database = client.db(process.env.MONGODB_DB);
  // console.log('REQ', req)
  // let data = req.body.data
  let data = req
  // console.log(data, 'DATA YO')

  if (data["createdAt"]) {
    data["updatedAt"] = new Date();
  } else {
    data["createdAt"] = new Date();
  }
  // console.log('DATA AFTER PARSE', data)
  try {

    //need to chekc if transaction id exists
    const donation = await database
      .collection("donations")
      .updateOne({
        transactionId: data.transactionId
      }, {$setOnInsert: {...data}}, {upsert: true});

      console.log('DONATION', donation)
     const donor = await database
      .collection("donors").updateOne(
        {email : data.email}, 
        { $setOnInsert: {
        displayName: data.displayName,
        email: data.email,
        address: data.address,
        stripe_name: data.stripe_name,
        createdAt: data.createdAt
        }}, {upsert: true}
      )
    return donor
    // res.status(200).json(donor);
  } catch (error) {
    console.log(error, "error from createAndUpdateUser in api/users");
    return error.message
    
  }
}

const getDonors = async (req, res) => {
  const client = await clientPromise;
  const database = client.db(process.env.MONGODB_DB);
  // let data = req.body.data
  console.log('GETTING DONORS')

  // console.log('DATA AFTER PARSE', data)
  try {
    const donors = await database
      .collection("donors")
      .aggregate([
        {
        $lookup: {
          from: "donations",
          localField: "email",
          foreignField: "email",
          pipeline: [
            // { "$match": { "$expr": { "$eq": ["$customer.phone", "$$id"] }}},
            { "$project": { "amount": 1, "_id": 0}},
            
          ],
          as: "donations"
        }
      }, 
      // {$unwind: "$donations"},
  
    // },
      // {
   
    ]).toArray()
    console.log('DONORS 1', donors)
    const mappedDonors = mapDonors(donors)
    // console.log('DONataion TOTAL', donationTotal)
    res.status(200).json(mappedDonors);
  } catch (error) {
    console.log(error, "error from createAndUpdateUser in api/users");
  }
}

const reduceDonations = (array) => {
  console.log('array', array)
 const newAmount = array.reduce((total, i ) => {
  // console.log('I', i, total)
  return total + i.amount}, 0)
  console.log('NEW AMOUNT', newAmount)
  return newAmount
}

const mapDonors = (donors) => {
  return donors.map((donor) => {
    console.log('donor', donor)
    const total = reduceDonations(donor.donations)
    donor.total = total
    const {donations,  ...newDonor} = donor 
    return newDonor
    // console.log('TOTAL', total)
  })
}

const updateDonor = async (req, res) => {
  const client = await clientPromise;
  const database = client.db(process.env.MONGODB_DB);
  console.log('REQ', req.body)
  // const email = req.body.email
  const data = req.body.data
  const donor = await database
  .collection("donors").updateOne(
    {email : data.email}, 
    { $set: {
    ...data,
    }}
  )
  res.status(200).json(donor);
}