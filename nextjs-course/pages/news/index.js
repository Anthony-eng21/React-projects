// our-domain.com/news
//instead of an anchor this Link object lets us create dynamic SPA routes
import Link from "next/link";
function NewsPage() {
  //deconstructured HTML link 😜
  return (
    <>
      <h1>The News Page</h1>
      <ul>
        <li>
          <Link href="news/something-important">
            NextJs Is A Great Framework
          </Link>
        </li>
      </ul>
    </>
  );
}

export default NewsPage;
