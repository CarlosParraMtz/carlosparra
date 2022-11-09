import Image from 'next/image'

export default function ContactButton({link, color="#333", image, title}) {
    return (
        <a href={link} target="_blank" rel="noreferrer" >
            <button style={{ background: color }} >
                <div className="social-button-image">
                    <Image src={`/images/icons/${image}.svg`} alt="whatsapp" layout='fill' />
                </div>
                <span>
                    <strong> {title} </strong>
                </span>
            </button>
        </a>
    )
}
