

export default function Card({ source, description, name, role }) {
    return (
        <div className="card">
            <div className="card-image">
                <img src={source} alt={`photo de ${name}`} />
            </div>
            <div className="card-description">
                <p>{description}</p>
                <p className="role">{role}</p>
            </div>
        </div>
    )
};