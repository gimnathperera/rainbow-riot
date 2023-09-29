import UploadIcon from "../icons/upload";

type Props = {};

const Uploader = ({}: Props) => {
  return (
    <div className="flex items-center justify-center w-full">
      <label
        htmlFor="dropzone-file"
        className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800  hover:bg-gray-100 "
      >
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          <div className="animate-bounce">
            <UploadIcon />
          </div>

          <p className="mb-2 text-sm">
            <span className="font-semibold">Click to upload</span> or drag and
            drop
          </p>
          <p className="text-xs">SVG, PNG or JPG</p>
        </div>
        <input id="dropzone-file" type="file" className="hidden" />
      </label>
    </div>
  );
};

export default Uploader;
