import { Link, useParams } from "react-router-dom";

export default function PlacesPage(){
    const {action} = useParams();
    
    return (
        <div>
            {action !=='new' && (
                <div className="text-center">
                    <Link className="inline-flex bg-primary text-white py-2 px-6 rounded-full" to="/account/places/new">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                        Add new places
                    </Link>
                </div>
            )}        
            {action === 'new' && (
                <div>
                    <form>
                        <h2 className="text-xl mt-4">Title</h2>
                        <p className="text-gray-500 text-sm">Title for your place</p>
                        <input type="text" placeholder="title, for example: MY love"/>
                        <h2 className="text-xl mt-4">Address</h2>
                        <p className="text-gray-500 text-sm">Address to this place</p>
                        <input type="text" placeholder="address"/>
                        <h2 className="text-xl mt-4">Photos</h2>
                        <p className="text-gray-500 text-sm">more = better</p>
                        <div className="flex">
                            <input type="text" placeholder="Add using a link ...jpg"/>
                            <button className="bg-gray-200 px-4 rounded-2xl">Add&nbsp;photo</button>
                        </div>
                        <div className="gird grid-cols-3 lg:grid-cols-6 md:grid-cols-4 mt-2">
                            <button className="flex gap-1 border bg-transparent rounded-2xl py-6 px-20 text-2xl text-gray-600 justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
                                </svg>
                                Upload
                            </button>
                        </div>
                        <h2 className="text-xl mt-4">description</h2>
                        <p className="text-gray-500 text-sm">description of the place</p>
                    </form>
                </div>
            )}
        </div>
    )
}