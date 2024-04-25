import { ItemSkeleton } from "./item-skeleton";

type Props = {
  count: number;
};

export function ListSkeleton(props: Props) {
  const { count } = props;

  const items: number[] = new Array(count).fill(null);

  return (
    <ul>
      {items.map(() => {
        return <ItemSkeleton />;
      })}
    </ul>
  );
}
