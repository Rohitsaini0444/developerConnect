const UserCard = ({ user }) => {
    return (
        <div className="card bg-base-300 w-60 shadow-md text-left my-4">
            <figure>
                <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {user.firstName} {user.lastName}
                    {/* {<div className="badge badge-secondary">NEW</div>} */}
                </h2>
                <p>{user?.about}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Interested</button>
                    <button className="btn btn-secondary">Ignore</button>
                </div>
            </div>
        </div>
    )
}

export default UserCard