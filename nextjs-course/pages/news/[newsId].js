//custom router hook built by the next.js team
import { useRouter } from "next/router";

// our-domain.com/news/something-important

function DetailPage() {
  const router = useRouter();

  //this hook runs immediately then gets the concrete nested url value with identifier(newsId, [newsId].js)
  const newsId = router.query.newsId;

  //send request to the backend API
  // to fetch newsItem with newsId

  return <h1>The Detail Page</h1>;
}

export default DetailPage;
