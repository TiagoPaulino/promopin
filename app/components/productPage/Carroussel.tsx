export default function Carroussel({ images }: { images: string[] }) {
  return (
      <div className="carousel w-full h-full ">
        {images.map((image, index) => (
          image !== "https://down-br.img.susercontent.com/file/br-11134258-7r98o-lzp4a6zr9hdte6" &&
          <div key={index} id={`slide${index + 1}`} className="carousel-item relative w-full h-full">
            <img src={image} className="w-full h-full object-cover" alt="product" />
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
  );
}
