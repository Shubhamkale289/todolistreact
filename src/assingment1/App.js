import React, { useState, useEffect } from "react";
import axios from "axios";
import Users from "./users";

const App = () => {
    const [items, setItems] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        randomUser();
    }, []);
    async function randomUser() {
        const response = await fetch('https://randomuser.me/api/?results=10');
        const data = response.json();
        setItems(data);
    }

    return
        <slider></slider>
        <Users isLoading={isLoading} items={items} />

    // <div>
    //     {items.map((item) => {
    //         { isLoading ? "Loading..." : item.first }
    //     })}
    // </div>

};

export default App;