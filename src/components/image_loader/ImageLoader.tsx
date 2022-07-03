type Props = {
    urls: string[];
}

const ImageLoader = ({urls} : Props) => {
    return (
        <div>
            {urls.map((url) => <img key={url} src={url} alt="" className="hidden" />)}
        </div>
    )
}

export default ImageLoader;