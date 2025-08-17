'use client'

import {  useState } from "react";
import Cookies from "js-cookie";
import Link from "next/link";

import styles from  "./product.module.css";

import * as index from "@/components/index";

function Product() {
    const [name, setname] = useState<string>("");
    const [price, setprice] = useState<string>("");
    const[description, setDescription] = useState<string>("");
    const [image, setimage] = useState<File | null>(null);

    const  handleProduct = async (e: React.FormEvent) => {
        e.preventDefault();

        const csrftoken = Cookies.get("csrftoken") || '';

        const formdata = new FormData();

        formdata.append("name",name);
        formdata.append("price", price);
        formdata.append("descriptio", description);

        if (image) {
            formdata.append("image",image);
        }
        console.log("error", formdata);
        try {
            const response = fetch("http://localhost:8000/product/product_view/", {
                method: "POST",
                headers: {
                    // "Content-Type": "application/json",
                    'X-CSRFToken': csrftoken,
                },
                credentials: 'include',
                mode: 'cors',
                body: formdata,
            });
            if ((await response).ok) {
                console.log("Product", (await response).status);
                return;
            }
            if ((await response).status === 200) {
                console.log("Product sucess", response);
            }
        } catch (err){
            console.error("Product erroer",err);
        }
    };

    return (
        <div>
            <h1>商品</h1>
            <index.Screen />
            <form className={styles.form} onSubmit={handleProduct}>
            <label>商品名を入力してください</label>
                <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setname(e.target.value)}
                    placeholder="name"
                />
            <label>値段</label>
                <input
                    type="text"
                    name="price"
                    value={price}
                    onChange={(e) => setprice(e.target.value)}
                    placeholder="price"
                />
            <label>説明</label>
                <textarea
                    name="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="description"
                />
            <label>画像</label>
                <input
                    type="file"
                    name="image"
                    accept="image/*"
                    onChange={(e) => {
                         if (!e.target.files) return;
                            const file: File = e.target.files[0];
                            setimage(file)
                        }}
                        //原因可能性１
                    />
                <button onSubmit={handleProduct}>投稿する</button>
                <Link href="/Home">
                    <button>戻る</button>
                </Link>
            </form>
        </div>
    )
}

export default Product;