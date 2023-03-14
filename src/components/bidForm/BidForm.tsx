import { Formik, Form } from "formik";
import * as Yup from "yup";
import Input from "../input/Input";
import { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useBid } from "@/hooks/BidProvider";
import Loading from "@/components/loading/Loading";
import Alert from "@/components/alert/Alert";

export interface IBidForm {
}

const BidForm: React.FC<IBidForm> = () => {
  const { selector, item, open, onClose, onBid } = useBid();
  if(selector.data) onClose();
  const cancelButtonRef = useRef(null);
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel
                className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <Formik
                  initialValues={{
                    bidPrice: item?.currentPrice
                  }}
                  validationSchema={Yup.object().shape({
                    bidPrice: Yup.number().moreThan(item?.currentPrice || 0).required("Required")
                  })}
                  onSubmit={({ bidPrice = 0 }) => onBid(item, bidPrice)}
                >
                  <Form>
                    {selector.loading && <Loading />}
                    {selector.error && <Alert message={selector.error} />}
                    {selector.data && <Alert message={"Your bid is submitted"} type="info" />}
                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                      <div className="mt-3 text-center sm:mt-0 sm:text-left">
                        <Dialog.Title as="h1" className="text-2xl font-semibold leading-6 text-gray-900">
                          {item ? item.name : "Bid"}
                        </Dialog.Title>
                        <div className="mt-6">
                          <Input label="Bid Price" name="bidPrice" />
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                      <button
                        type="submit"
                        className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                      >
                        Submit
                      </button>
                      <button
                        type="button"
                        className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                        onClick={() => onClose()}
                        ref={cancelButtonRef}
                      >
                        Cancel
                      </button>
                    </div>
                  </Form>
                </Formik>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default BidForm;