import Head from "next/head";
import { MongoClient, ObjectId } from "mongodb";

import MeetUpDetail from "../../components/meetups/MeetupDetail";
//strucutured it like this with the sep comp because we want the css styles and reactjs props
//passed via props

function MeetupDetails(props) {
  //dynamic expressions for title and props.description for details data in the content field
  return (
    <>
    <Head>
      <title>{props.meetupData.title}</title>
        <meta
          name="description"
          content={props.meetupData.description}
        />
    </Head>
      <MeetUpDetail
        image={props.meetupData.image}
        title={props.meetupData.title}
        address={props.meetupData.address}
        description={props.meetupData.description}
      />
    </>
  );
}

//getStaticPaths is for prepage rendering for dynamic pages via params
export async function getStaticPaths() {
  //Fetch Data from an API
  const client = await MongoClient.connect(
    `mongodb+srv://12345:12345@cluster0.dizvn9k.mongodb.net/meetups?retryWrites=true&w=majority`
  );
  const db = client.db();
  //nosql collections are kind of like sql tables but are documents with JSON data
  const meetupsCollection = db.collection("meetups");

  //first arg are all the collection objects we want to find in this db
  //second arg in find is what field we want to extract from the collection i.e the id field for this dynamic page
  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

  client.close();

  //fallback allows us to pregenerate some of our pages for specific id values
  //array of objects of the path and params objs we want and their id keys
  return {
    fallback: true,
    //dynamically render the path with the db API data id keys
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
  };
}

//get static props is for rendering the specified data for each id value and it's props
export async function getStaticProps(context) {
  // Fetch data for a single meetup

  //concrete meetup id for the meetup(s) we render through a context key obj it passes our url param i.e "m1"
  const meetupId = context.params.meetupId;

  //Fetch Data from an API
  const client = await MongoClient.connect(
    `mongodb+srv://12345:12345@cluster0.dizvn9k.mongodb.net/meetups?retryWrites=true&w=majority`
  );
  const db = client.db();
  //nosql collections are kind of like sql tables but are documents with JSON data
  const meetupsCollection = db.collection("meetups");

  //the id is the dynamic path id we setup in our file directory [meetupId]
  const selectedMeetup = await meetupsCollection.findOne({
    _id: ObjectId(meetupId),
  });

  client.close();

  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        image: selectedMeetup.image,
        description: selectedMeetup.description,
      },
    },
  };
}

export default MeetupDetails;
