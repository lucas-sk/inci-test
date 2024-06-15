import { Button } from './ui/button'

interface ItemHubProps {
  name: string
  imageUrl: string
  url: string
}

export function ItemHub({ url, imageUrl, name }: ItemHubProps) {
  return (
    <div className="space-y-6 w-[222px] h-[196px] p-5 flex justify-center items-center flex-col">
      <div className="flex flex-col items-center gap-2">
        <img src={imageUrl} alt="" />
        <p>{name}</p>
      </div>
      <Button className="w-max bg-transparent text-slate-700 hover:bg-blue-700 hover:text-white">
        <a href={url}>Entrar</a>
      </Button>
    </div>
  )
}
