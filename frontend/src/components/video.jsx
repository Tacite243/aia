

export default function Video({ source }) {
    return (
        <div className="video">
            <video src={source}></video>
        </div>
    )
}