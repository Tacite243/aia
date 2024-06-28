

export default function Card({ source, description, name }) {
    return (
        <div className="card">
            <div className="card-image">
                <img src={source} alt={`photo de ${name}`} />
            </div>
            <div className="card-description">
                <p>{description}</p>
            </div>
        </div>
    )
};