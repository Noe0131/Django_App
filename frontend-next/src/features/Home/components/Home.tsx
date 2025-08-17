import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import Image from "next/image";

import Styles from "./Home.module.css";
function ListProduct () {
    const [list, setlist] = useState<Array<({name: string, price: string , description : string, image : any})>>();

    useEffect(() => {
        const csrftoken = Cookies.get("csrftoken") || '';
        fetch("http://localhost:8000/product/merchandise_info/", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': csrftoken, 
            },
            credentials: "include",
        })
        .then((res) => {
            return res.json();
        })
        .then((data) => {     
 
            console.log("OK",data);
            setlist(data)
        })
        .catch((err) => {
            console.error(err);
        })
    }, [])
    return (
        <div>
            {list?.map((item) => {
                return <ul className={Styles.ul} key={item.name}>
                    <li>商品名{item.name}</li>
                    <li>値段{item.price}円</li>
                    <li>説明{item.description}</li>
                    <li>
                        {item.image && (
                            <Image
                                src={item.image}
                                alt={item.name}
                                width={150}
                                height={100}
                            />
                        )}
                    </li>
                </ul>
            })}
        </div>
    )
}

export default ListProduct;