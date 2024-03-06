import {NavBar, Swiper, Toast} from "antd-mobile";
import styles from './index.less'
import {FC, useEffect, useState} from "react";

const queryBanner = async () => {

    return {
        success: true,
        message: "ok",
        data: [
            {
                text: "11",
                url: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F05ad4cb1-77b6-4a47-83d6-31b1060d377c%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1712224766&t=141b06d1f9256ca8f6cdcf9d5e0d1949",
                link: ""
            },
            {
                text: "22",
                url: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F05ad4cb1-77b6-4a47-83d6-31b1060d377c%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1712224766&t=141b06d1f9256ca8f6cdcf9d5e0d1949",
                link: ""
            },
            {
                text: "33",
                url: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F05ad4cb1-77b6-4a47-83d6-31b1060d377c%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1712224766&t=141b06d1f9256ca8f6cdcf9d5e0d1949",
                link: ""
            },
        ],
    }

}

const Banner: FC = () => {

    const [banner, setBanner] = useState([])

    useEffect(() => {
        queryBanner().then((response) => {
            if (response.success) {
                setBanner(response.data)
            }
        })
    }, []);

    return (
        <Swiper
            loop
            autoplay
        >
            {banner.map((color, index) => (
                <Swiper.Item key={index}>
                    <div
                        className={styles.content}
                        style={{background: "#bcffbd"}}
                        onClick={() => {
                            Toast.show(`你点击了卡片 ${index + 1}`)
                        }}
                    >
                        dd
                        {/*<Image src="https://images.unsplash.com/photo-1567945716310-4745a6b7844b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=60" />*/}
                    </div>
                </Swiper.Item>
            ))}
        </Swiper>
    )
}

export default function HomePage() {
    const colors = ['#ace0ff', '#bcffbd', '#e4fabd', '#ffcfac']

    const items = colors.map((color, index) => (
        <Swiper.Item key={index}>
            <div
                className={styles.content}
                style={{background: color}}
                onClick={() => {
                    Toast.show(`你点击了卡片 ${index + 1}`)
                }}
            >
                {index + 1}
            </div>
        </Swiper.Item>
    ))
    return (
        <div>

            <NavBar back={null}>
                标题
            </NavBar>
            <Banner/>
            {/*<KeepAlive name="nav" when={true} cacheKey="ddd">*/}

            {/*</KeepAlive>*/}
        </div>
    );
}
