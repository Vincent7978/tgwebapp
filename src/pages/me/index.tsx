import {Button, NavBar, Swiper, Toast} from "antd-mobile";
import styles from './index.less'
import {useState} from "react";
import {KeepAlive} from "@@/exports";

function Counter() {
    const [count, setCount] = useState(0)

    return (
        <div>
            <p>count: {count}</p>
            <button onClick={() => setCount(count => count + 1)}>Add</button>
        </div>
    )
}

export default function HomePage() {



const [n,setN] = useState(0);
  return (
    <div>

        <NavBar  back={null}>
            标题
        </NavBar>
        <KeepAlive name="aa" when={true}>
            <Counter/>
        </KeepAlive>
    </div>
  );
}
