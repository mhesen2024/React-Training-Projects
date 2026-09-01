import { useFetcher } from "react-router-dom";
import Button from "../../ui/Button.jsx";
import { updateOrder } from "../../services/apiRestaurant.js";

function UpdateOrder() {
  const fetcher = useFetcher();
  const isUpdating = fetcher.state !== "idle";

  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button disabled={isUpdating}>
        {isUpdating ? "Updating..." : "Make priority"}
      </Button>
    </fetcher.Form>
  );
}

export async function action({ params }) {
  await updateOrder(params.id, { priority: true });
  return null;
}

export default UpdateOrder;
