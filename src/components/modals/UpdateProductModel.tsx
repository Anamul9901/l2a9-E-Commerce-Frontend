import { Button } from "@nextui-org/button";
import FXForm from "../form/FXForm";
import FXInput from "../form/FXInput";
import Loading from "../UI/loading";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import FXModal from "./FXModal";
import { useAddProductMutation, useGetSingleProductQuery, useUpdateProductMutation } from "@/src/redux/features/products/productApi";

const UpdateProductModal = ({ id }: { id: string }) => {
  const [updateProduct, { isLoading, error }] = useUpdateProductMutation();
  const {data: singleData} = useGetSingleProductQuery(id);
  const singleProduct = singleData?.data;
  if (error) {
    toast.error((error as any)?.data?.message);
  }
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const price = Number(data.price);
    const inventoryCount = Number(data.inventoryCount);
    data.price = price;
    data.inventoryCount = inventoryCount;
    const finalData = {data, id}
    const res = await updateProduct(finalData).unwrap();
    if (res?.data) {
      toast.success(res?.message);
    }
  };
  
  return (
    <div>
      {isLoading && <Loading />}
      <FXModal
        title="Update Product"
        buttonText="📝"
        buttonClassName="px-2 py-1 bg-green-600 text-white rounded-md hover:bg-green-500 transition-all"
      >
        <FXForm onSubmit={onSubmit}>
          <div className="py-1">
            <FXInput label="Name" name="name" defaultValue={singleProduct?.name} required></FXInput>
          </div>
          <div className="py-1">
            <FXInput label="Title" name="title" defaultValue={singleProduct?.title} required></FXInput>
          </div>
          <div className="py-1">
            <FXInput label="Category" name="category" defaultValue={singleProduct?.category} required></FXInput>
          </div>
          <div className="py-1">
            <FXInput
              label="Price"
              name="price"
              type="number"
              defaultValue={singleProduct?.price}
              required
            ></FXInput>
          </div>
          <div className="py-1">
            <FXInput
              label="Quantity"
              name="inventoryCount"
              type="number"
              defaultValue={singleProduct?.inventoryCount}
              required
            ></FXInput>
          </div>
          <div className="py-1">
            <FXInput label="Images" name="images" defaultValue={singleProduct?.images}></FXInput>
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

export default UpdateProductModal;
