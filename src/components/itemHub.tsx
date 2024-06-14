import { Button } from './ui/button'

interface ItemHubProps {
  imageUrl: string
  url: string
}

export function ItemHub({ url, imageUrl }: ItemHubProps) {
  return (
    <div className="space-y-6 w-[222px] p-5 flex justify-center items-center flex-col">
      <img src={imageUrl} alt="" />
      <Button className="w-max bg-transparent text-slate-700 hover:bg-slate-700 hover:text-white">
        <a href={url}>Entrar</a>
      </Button>
    </div>
  )
}
