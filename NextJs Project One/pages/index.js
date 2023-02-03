// our-domain.com/
//allows us to add a head component to our page
import Head from "next/head";
import { MongoClient } from "mongodb";

// import Layout from "../components/layout/Layout";
import MeetupList from "../components/meetups/MeetupList";

// const DUMMY_MEETUPS = [
//   {
//     id: "m1",
//     title: "A First Meetup",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg",
//     address: "Some address, 12345 Some City",
//     description: "This is A First Meetup!",
//   },
//   {
//     id: "m2",
//     title: "A Second Meetup",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/8/84/Holy_SURP_Hovhannes_Church.jpg",
//     address: "Some address, 12345 Some City",
//     description: "This is A Second Meetup!",
//   },
//   {
//     id: "m3",
//     title: "A Third Meetup",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/7/7e/16-03-30-Klagemauer_Jerusalem_RalfR-DSCF7689.jpg",
//     address: "Some address, 12345 Some City",
//     description: "This is A Third Meetup!",
//   },
// ];

function HomePage(props) {
  //static generation cs server side rendering
  return (
    <>
      <Head>
        <title>Next.js Meetups</title>
        <meta
          name="description"
          content="Browse a list of highly active react/next meetups"
        />
      </Head>
      <MeetupList meetups={props.meetups} />;
    </>
  );
  //request and fetch data only loads on first cycle and initial items (TODO Enhhance SEO Page PreRendering )
}

// //generates on every incoming request

// //this can be bad because we need to wait on an individual request for it to work ;(
//   // ssg with static props is faster and we can utilize caching
// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;

//   //Fetch data from an API(no need for revalidate property)

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     }
//   }
// }

//calls this function before it calls the component() and we pass the required data here

export async function getStaticProps() {
  //Fetch Data from an API
  const client = await MongoClient.connect(
    `mongodb+srv://12345:12345@cluster0.dizvn9k.mongodb.net/meetups?retryWrites=true&w=majority`
  );
  const db = client.db();
  //nosql collections are kind of like sql tables but are documents with JSON data
  const meetupsCollection = db.collection("meetups");

  //find finds all the documents in that collection and to array formats all the data into an array
  const meetups = await meetupsCollection.find().toArray();

  client.close();

  //move data fetching away from the client and to the server through props and this returned props:{}
  //revalidate unlocks Incremental Static Generation: Generates during the build process
  //then regenerates/pushes a new page as indicated 1 seconds after each render cycle.
  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 1,
  };
}
export default HomePage;
