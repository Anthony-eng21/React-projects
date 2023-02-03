import Link from "next/link";
import Card from "../ui/Card";
import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <>
      <Card>
        <header className={classes.header}>
          <div className={classes.logo}>Next.js Meetups</div>
          <nav>
            <ul>
              <li>
                <Link href="/">All Meetups</Link>
              </li>
              <li>
                <Link href="/new-meetup">Add New Meetup</Link>
              </li>
            </ul>
          </nav>
        </header>
      </Card>
    </>
  );
}

export default MainNavigation;
