
import Card from "./card";
import data from '../data.json';

export default function Intervenant() {
    return (
        <div className="intervenants">
            <div className="intervenants-liste">
                <Card  source={data.intervenants.intervenant1.photo} description={data.intervenants.intervenant1.description} name={data.intervenants.intervenant1.name} />
                <Card  source={data.intervenants.intervenant2.photo} description={data.intervenants.intervenant2.description} name={data.intervenants.intervenant2.name} />
                <Card  source={data.intervenants.intervenant3.photo} description={data.intervenants.intervenant3.description} name={data.intervenants.intervenant3.name} />
            </div>
        </div>
    )
}