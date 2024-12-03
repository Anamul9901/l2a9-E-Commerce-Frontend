import { Button } from "@nextui-org/button";
import FXForm from "../form/FXForm";
import FXInput from "../form/FXInput";
import Loading from "../UI/loading";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import FXModal from "./FXModal";
import { useAddProductMutation } from "@/src/redux/features/products/productApi";

const AddProductModel = () => {
  const [addProduct, { isLoading, error }] = useAddProductMutation();
  if (error) {
    toast.error((error as any)?.data?.message);
  }
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const price = Number(data.price);
    const inventoryCount = Number(data.inventoryCount);
    data.price = price;
    data.inventoryCount = inventoryCount;
    console.log(data);
    const res = await addProduct(data).unwrap();
    console.log(res);
    if (res?.data) {
      toast.success(res?.message);
    }
  };
  return (
    <div>
      {isLoading && <Loading />}
      <FXModal
        title="Add Product"
        buttonText="Add Product"
        buttonClassName="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-500 transition-all"
      >
        <FXForm onSubmit={onSubmit}>
          <div className="py-1">
            <FXInput label="Name" name="name" required></FXInput>
          </div>
          <div className="py-1">
            <FXInput label="Title" name="title" required></FXInput>
          </div>
          <div className="py-1">
            <FXInput label="Category" name="category" required></FXInput>
          </div>
          <div className="py-1">
            <FXInput
              label="Price"
              name="price"
              type="number"
              required
            ></FXInput>
          </div>
          <div className="py-1">
            <FXInput
              label="Quantity"
              name="inventoryCount"
              type="number"
              required
            ></FXInput>
          </div>
          <div className="py-1">
            <FXInput label="Images" name="images"></FXInput>
          </div>
          <div className="flex justify-center pt-2 w-full pb-2">
            <Button className="w-full" type="submit">
              Add Product
            </Button>
          </div>
        </FXForm>
      </FXModal>
    </div>
  );
};

export default AddProductModel;
