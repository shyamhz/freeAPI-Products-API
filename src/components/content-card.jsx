import { Card, CardHeader, CardTitle, CardAction } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
// id: 1,
//             title: "iPhone 9",
//             description: "An apple mobile which is nothing like apple",
//             price: 549,
//             discountPercentage: 12.96,
//             stock: 94,
//             thumbnail:

const CardImage = ({
  title,
  description,
  price,
  discountPercentage,
  stock,
  thumbnail,
}) => {
  return (
    <Card className="relative w-full max-w-sm pt-0">
      <img
        src={thumbnail}
        alt="Thumbnail"
        className="relative z-20 aspect-video w-full object-cover"
      />
      <CardHeader className="space-y-2">
        <CardTitle className="text-lg line-clamp-2">{title}</CardTitle>
        <div className="space-y-1">
          <p className="text-sm font-semibold text-foreground flex gap-2 items-center">
            Price:{" "}
            <span className="line-through text-xs text-muted-foreground">
              {discountPercentage}
            </span>
            <strong>{price}</strong>
          </p>
          <p className="text-xs text-muted-foreground">{description}</p>
        </div>
        <p className="flex gap-2 items-center">
          <strong className="text-shadow-accent-foreground">In stock :</strong>
          <span>
            <span className="text-red-500">{stock}</span> left
          </span>
        </p>
      </CardHeader>
      <CardAction className="px-2 flex gap-4">
        <Button className="bg-cta hover:bg-chart-1">Buy now</Button>
        <Button variant="outline">Add to Cart</Button>
      </CardAction>
    </Card>
  );
};

export default CardImage;
