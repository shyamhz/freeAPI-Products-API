import {
  Card,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const CardImage = ({ imageUrl, videoTitle, channelTitle, likeCount, viewCount }) => {
  return (
    <Card className="relative w-full max-w-sm pt-0">
      <img
        src={imageUrl}
        alt="Thumbnail"
        className="relative z-20 aspect-video w-full object-cover"
      />
      <CardHeader className="space-y-2">
        <CardTitle className="text-lg line-clamp-2">{videoTitle}</CardTitle>
        <div className="space-y-1">
          <p className="text-sm font-semibold text-foreground">{channelTitle}</p>
          <p className="text-xs text-muted-foreground">
            {viewCount} views • {likeCount} likes
          </p>
        </div>
      </CardHeader>
    </Card>
  );
};

export default CardImage;
