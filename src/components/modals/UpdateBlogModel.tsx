import { Button } from "@nextui-org/button";
import FXForm from "../form/FXForm";
import FXInput from "../form/FXInput";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import FXModal from "./FXModal";
import { useUpdatenewsletterMutation } from "@/src/redux/features/blog/blogApi";

const UpdateBlogModal = ({ blog }: { blog: any }) => {
  const [updateBlog] = useUpdatenewsletterMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const updatableData = { id: blog.id, data };
    const res = await updateBlog(updatableData).unwrap();
    if (res?.data) {
      toast.success(`${res?.message}`);
    }
  };

  return (
    <div>
      {/* {isLoading && <Loading />} */}
      <FXModal
        title="Update Newsletter"
        buttonText="✏️"
        buttonClassName="px-2 py-1 bg-green-600 text-white rounded-md hover:bg-green-500 transition-all"
      >
        <FXForm onSubmit={onSubmit}>
          <div className="py-1">
            <FXInput
              label="Name"
              name="name"
              defaultValue={blog?.name}
            ></FXInput>
          </div>
          <div className="py-1">
            <FXInput
              label="Title"
              name="title"
              defaultValue={blog?.title}
            ></FXInput>
          </div>
          <div className="py-1">
            <FXInput
              label="Description"
              name="description"
              defaultValue={blog?.description}
            ></FXInput>
          </div>
          <div className="py-1">
            <FXInput
              label="Image"
              name="image"
              defaultValue={blog?.image}
            ></FXInput>
          </div>
          <div className="py-1">
            <FXInput
              label="Reading Time"
              name="readingTime"
              type="number"
              defaultValue={blog?.readingTime}
            ></FXInput>
          </div>
          <div className="flex justify-center pt-2 w-full pb-2">
            <Button className="w-full" type="submit">
              Update Newsletter
            </Button>
          </div>
        </FXForm>
      </FXModal>
    </div>
  );
};

export default UpdateBlogModal;
