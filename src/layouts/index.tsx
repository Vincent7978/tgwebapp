import { Link, Outlet } from 'umi';
import styles from './index.less';
import {Helmet} from "@@/exports";
import {useEffect} from "react";

export default function Layout() {

    useEffect(()=>{
        // @ts-ignore
        window.Telegram.WebApp.ready();
        console.log("===================");
        // console.log(Telegram.WebApp);
        console.log(window.Telegram.WebApp);
        console.log("===================");
        // @ts-ignore
        document.getElementById("name").innerHTML = "your name is: " + window.Telegram?.WebApp?.initDataUnsafe?.user?.first_name
        // @ts-ignore
        document.getElementById("id").innerHTML = "your id is: " + window.Telegram?.WebApp?.initDataUnsafe?.user?.id
        document.getElementById("tg").innerHTML =  JSON.stringify(window.Telegram?.WebApp);
    })

  return (
    <div className={styles.navs} id="layout">
        <Helmet>
            <script src="https://telegram.org/js/telegram-web-app.js"/>
        </Helmet>
{/*         <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
        <li>
          <Link to="/docs">Docs</Link>
        </li>
        <li>
          <a href="https://github.com/umijs/umi">Github11</a>
        </li>
      </ul> */}
        <Link to="/"></Link>
      <Outlet />
{/*         Hey there :)
        This is a VERY basic example of a webapp.

        <br/>
        All it does is read the info from telegram, and validate it.

        <br/>
        <p id="name"></p>
        <br/>
        <p id="id"></p>
        <br/>
        <p id="valid">unchecked</p>
        <br/>
        <p id="tg"></p> */}
    </div>
  );
}
