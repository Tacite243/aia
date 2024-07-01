
import Card from "./card";
import data from '../data.json';

export default function Intervenant() {
    const intervenantsArray = Object.values(data.intervenants)
    return (
        <div className="intervenants">
            <div className="intervenants-liste">
                {intervenantsArray.map((intervenant, index) => (
                    <Card
                        key={index}
                        source={intervenant.photo}
                        name={intervenant.name}
                        description={intervenant.description}
                        role={intervenant.role}
                    />
                ))}
            </div>
        </div>
    )
}