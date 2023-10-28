import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import ReactPaginate from "react-paginate";

export default function CheckPoint(props) {
    const [data, setData] = useState([]);
    useEffect(() => {
        
    }, []);

    const [items, setItems] = useState([]);

    const [pageCount, setpageCount] = useState(0);

    let limit = 10;

    useEffect(() => {
        const getPost = async () => {
            const res = await fetch(
                `http://127.0.0.1:8080/api/posts/1/${limit}`
            );
            const data = await res.json();
            //console.log(data.posts);
            const totalrec = data.total
            const total = totalrec;
            console.log(total);
            setpageCount(Math.ceil(total / limit));
            // console.log(Math.ceil(total/12));
            setItems(data.posts);
        };

        getPost();
    }, [limit]);

    const fetchPost = async (currentPage) => {
        let status = document.getElementById('status');
        status.classList.remove('hidden');
        const res = await fetch(
            `http://127.0.0.1:8080/api/posts/${currentPage}/${limit}`
        );
        const data = await res.json();
        status.classList.add('hidden');
        return data.posts;
    };

    const handlePageClick = async (data) => {
        console.log(data.selected);

        let currentPage = data.selected + 1;

        const listpage = await fetchPost(currentPage);

        setItems(listpage);
    };

    const Logout = () => {
        axios.post(`${process.env.REACT_APP_API_URL_LOCAL}/logout`, {}, {
            withCredentials: true,
            headers: {
                "Content-Type": 'application/json',
                Authorization: `Bearer ${props.token}`
            },
        })
            .then(() => {
                props.removeToken();
            })
            .catch((error) => {
                console.error(error); // Changed to console.error for logging errors
            });
        alert('You Have Been Logout');
        window.location.href = '/Admin/Login';
    };

    return (
        <div className="flex flex-col px-5 py-4 bg-gradient-to-r space-y-6 from-yellow-200 via-green-200 to-green-300 min-h-screen">
            <div className="text-center justify-center">
                <span className="text-blue">This is checking point page</span>
            </div>
            <table class="table-fixed border-2 border-black">
                <thead className="border-2 border-black">
                    <tr className="border-2 border-black">
                        <th className="border-2 border-black">ID</th>
                        <th className="border-2 border-black">Client</th>
                        <th className="border-2 border-black">Phone</th>
                        <th className="border-2 border-black">Date of Birth</th>
                    </tr>
                </thead>
                <tbody className="border-2 border-black">
                    {items.map((row, index) => <tr className="border-2 border-black" key={index}>
                        <td className="border-2 border-black text-center" key={row.id}>{row.id}</td>
                        <td className="border-2 border-black text-center" key={row.title}>{row.title}</td>
                        <td className="border-2 border-black text-center" key={row.phone}>{row.phone}</td>
                        <td className="border-2 border-black text-center" key={row.dob}>{row.dob}</td>
                    </tr>)}
                </tbody>
            </table>

            <div className="text-center flex justify-center hidden" role="status" id="status">
                <svg aria-hidden="true" class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-white" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                </svg>
                <span class="sr-only">Loading...</span>
            </div>


            <ReactPaginate
                previousLabel={"previous"}
                nextLabel={"next"}
                breakLabel={<span className="mr-4 text-black">...</span>}
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={3}
                onPageChange={handlePageClick}
                containerClassName="pagination flex items-center justify-center mt-8 mb-4 bg-yellow-200 via-green-200"
                pageClassName="block border- border-solid border-lightGray hover:bg-lightGray w-10 h-10 flex items-center justify-center rounded-md mr-4"
                pageLinkClassName={"page-link"}
                previousClassName={"page-item"}
                previousLinkClassName={"page-link"}
                nextClassName={"page-item"}
                nextLinkClassName={"page-link"}
                breakClassName={"page-item"}
                breakLinkClassName={"page-link"}
                activeClassName="bg-blue text-white font-bold"
            />
        </div>
    );
}
