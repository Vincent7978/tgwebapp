import {Link, Outlet} from "@@/exports";
import {useEffect} from "react";

const DocsPage = () => {

    useEffect(()=>{
        console.log("===================");
        // @ts-ignore
        // console.log(window.Telegram.WebApp);
        console.log("===================");
        // @ts-ignore
        document.getElementById("name").innerHTML = "your name is: " + window.Telegram?.WebApp?.initDataUnsafe?.user?.first_name
        // @ts-ignore
        document.getElementById("id").innerHTML = "your id is: " + window.Telegram?.WebApp?.initDataUnsafe?.user?.id
        // @ts-ignore
        document.getElementById("tg").innerHTML =  JSON.stringify(window.Telegram?.WebApp);
    })

  return (
      <div>
          <p>This is umi docs.</p>
          <ul>
              <li>
                  <Link to="/">Home</Link>
              </li>
              <li>
                  <Link to="/docs">Docs</Link>
              </li>
              <li>
                  <a href="https://github.com/umijs/umi">Github</a>
              </li>
          </ul>
          <Outlet/>
          Hey there :)
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
          <p id="tg"></p>
      </div>
  );
};

export default DocsPage;
