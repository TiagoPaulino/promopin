export default function Carroussel({ images }: { images: string[] }) {
  return (
    <div>
      <div className="carousel w-full h-full">
        {images.map((image, index) => (
          <div id={`slide${index + 1}`} className="carousel-item relative w-full">
            <img src={image} className="w-full" />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href={`#slide${index === 0 ? images.length : index}`} className="btn btn-circle">
                ❮
              </a>
              <a href={`#slide${index === images.length - 1 ? 1 : index + 2}`} className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
