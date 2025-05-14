export type ContainerPropsTypes<T extends React.ElementType> = {
  as?: T;
  className?: string;
  children: React.ReactNode;
} & React.ComponentPropsWithoutRef<T>;

export interface SkiptToContentsPropsType {
  classNames: string;
}

export type VisuallyHiddenPropsType = {
  children: React.ReactNode;
} & React.ComponentPropsWithoutRef<"span">;

export type ListPropsType<Item, As extends React.ElementType> = {
  items: Item[];
  renderItem: (item: Item) => React.ReactNode;
  as?: As;
};

export interface TitlePropsType extends React.HTMLAttributes<HTMLElement> {
  level: keyof React.JSX.IntrinsicElements;
  ariaLevel: number | undefined;
  children: React.ReactNode;
}

export type InputsPropsType = {
  id?: string;
  label?: string;
  type: "search" | "text" | "email" | "number";
} & React.ComponentPropsWithoutRef<"input">;

export type FormPropsType = React.ComponentPropsWithoutRef<"form"> & {
  children: React.ReactNode;
};

export type CardPropsType = {
  children: React.ReactNode;
  classNames?: string;
} & React.ComponentPropsWithoutRef<"article">;

export type ProductsType = {
  id: number;
  title: string;
  price: number;
  image: string;
}[];

export type RecommendedProductsTypes = ProductsType;

export type DealsAndOffersProductsType = {
  id: number;
  title: string;
  discount: number;
  imageUrl: string;
}[];

export type OutdoorsProductsType = ProductsType;

export type ConsumerProductsType = ProductsType;
