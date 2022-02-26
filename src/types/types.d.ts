interface ProjectMap { [name: string]: Project }

type Project = {
  title: string,
  to?: string,
  logo: string,
  background: string,
  foreground?: string,
  preview?: string[],
  video?: string,
  technologies: ReactNode[],
  repository?: string,
  site?: string
}

type FontsLoadedProps = {
  fontsLoaded: boolean
}

type ImageTypes = {
  src: string,
  duration?: number,
  timingFunction?: string,
  delay?: number,
  style?: Object,
  containerClass?: string
}

declare type CrossfadeImageType = (props: ImageTypes) => JSX.Element;

declare module "*.mp4" {
  const src: string
  export default src
}

declare module "react-crossfade-image" {
  const CrossfadeImage: CrossfadeImageType
  export = CrossfadeImage
}
