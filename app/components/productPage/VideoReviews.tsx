export default function VideoReviews(videos:{videos:string[]}) {
    return (
        <div className="flex flex-col gap-2">
            <h5 className="text-2xl font-bold">Videos de Avaliações</h5>
        <div className="grid grid-cols-2 gap-2 md:grid-cols-3">
            {videos.videos.map((video, index) => (
                <div key={index} className="w-full h-full overflow-hidden">
                    <video className="rounded-2xl" src={video} autoPlay loop muted></video>
                </div>
            ))}
        </div>
        </div>
    )
}