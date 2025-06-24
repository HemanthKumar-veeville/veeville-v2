import React, { useState } from "react";
import { Button } from "./button";
import { Input } from "./input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./select";

// Base form data interface
interface BaseFormData {
  name: string;
  email: string;
}

// Callback form data
interface CallbackFormData extends BaseFormData {
  companyName: string;
  companyLocation?: string;
  message?: string;
}

// Internship form data
interface InternshipFormData extends BaseFormData {
  collegeName: string;
  internshipType: string;
  startDate: string;
  endDate: string;
  portfolioLink: string;
  whyVeeville?: string;
  cv?: File;
}

// Media form data
interface MediaFormData extends BaseFormData {
  publication: string;
  details: string;
}

// Work form data
interface WorkFormData extends BaseFormData {
  team: string;
  workExperience?: string;
  phone?: string;
  linkToWork?: string;
  whyVeeville: string;
  cv?: File;
}

type FormType =
  | "Request a Callback"
  | "Veeville Internship Program"
  | "Media Enquiries"
  | "Employee Verification"
  | "Work at Veeville";

// Shared styles
const inputStyles =
  "w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm hover:border-[#5a4a42] outline-none focus:border-[#5a4a42] transition-all duration-200 placeholder:text-transparent focus:placeholder:text-gray-400 pt-4";
const selectStyles =
  'w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm focus:outline-none hover:border-[#5a4a42] focus:border-[#5a4a42] transition-colors duration-200 cursor-pointer appearance-none bg-[url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" fill="%235a4a42" viewBox="0 0 24 24"><path d="M7 10l5 5 5-5z"/></svg>\')] bg-no-repeat bg-[length:20px] bg-[center_right_0.5rem] [&>option]:bg-white [&>option]:text-[#5a4a42] [&>option]:hover:bg-[#f5f5f5]';
const textareaStyles =
  "w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm hover:border-[#5a4a42] focus:border-[#5a4a42] outline-none transition-all duration-200 resize-none pt-4";

// Custom styles for Select component
const selectTriggerStyles =
  "w-full border border-gray-300 bg-transparent text-sm hover:border-[#5a4a42] focus:border-[#5a4a42] [&[data-placeholder]]:text-gray-400 [&:not([data-placeholder])>*]:text-[#5a4a42] [&:not([data-placeholder])>*]:font-medium outline-none transition-all duration-200 pt-4";
const selectContentStyles =
  "bg-white border border-gray-300 rounded-md shadow-lg outline-none";
const selectItemStyles =
  "text-[#5a4a42] data-[highlighted]:bg-[#f5f5f5] data-[highlighted]:text-[#5a4a42] cursor-pointer relative py-2 pl-8 pr-4 data-[state=checked]:bg-[#f5f5f5] data-[state=checked]:text-[#5a4a42] data-[state=checked]:font-medium outline-none";

// Custom styles for file input
const fileInputStyles =
  "w-full rounded-md border border-gray-300 bg-transparent text-sm hover:border-[#5a4a42] focus:border-[#5a4a42] outline-none transition-all duration-200 file:hidden cursor-pointer relative";

// Form field component
const FormField: React.FC<{
  label: string;
  required?: boolean;
  children: React.ReactNode;
}> = ({ label, required = false, children }) => (
  <div className="relative text-[#5a4a42] ">
    <label className="absolute text-xs font-medium text-[#5a4a42] bg-white px-1 ml-2 -mt-2 z-10">
      {label}
      {required && "*"}
    </label>
    {children}
  </div>
);

const EnquiryForm: React.FC = () => {
  const [formType, setFormType] = useState<FormType>("Request a Callback");
  const [selectedFileName, setSelectedFileName] = useState<string>("");
  const [formData, setFormData] = useState<
    CallbackFormData | InternshipFormData | MediaFormData | WorkFormData
  >({
    name: "",
    email: "",
    companyName: "",
    companyLocation: "",
    message: "",
  } as CallbackFormData);

  const handleFormTypeChange = (value: FormType) => {
    const newFormType = value;
    setFormType(newFormType);

    // Reset form data based on new form type
    switch (newFormType) {
      case "Request a Callback":
        setFormData({
          name: "",
          email: "",
          companyName: "",
          companyLocation: "",
          message: "",
        } as CallbackFormData);
        break;
      case "Veeville Internship Program":
        setFormData({
          name: "",
          email: "",
          collegeName: "",
          internshipType: "",
          startDate: "",
          endDate: "",
          portfolioLink: "",
          whyVeeville: "",
        } as InternshipFormData);
        break;
      case "Media Enquiries":
        setFormData({
          name: "",
          email: "",
          publication: "",
          details: "",
        } as MediaFormData);
        break;
      case "Work at Veeville":
        setFormData({
          name: "",
          email: "",
          team: "",
          workExperience: "",
          phone: "",
          linkToWork: "",
          whyVeeville: "",
        } as WorkFormData);
        break;
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        cv: file,
      }));
      setSelectedFileName(file.name);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);

    // For demonstration, let's create a formatted email body
    let emailBody = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0A`;

    switch (formType) {
      case "Request a Callback":
        const callbackData = formData as CallbackFormData;
        emailBody += `Company: ${callbackData.companyName}%0D%0A`;
        if (callbackData.companyLocation)
          emailBody += `Location: ${callbackData.companyLocation}%0D%0A`;
        if (callbackData.message)
          emailBody += `Message: ${callbackData.message}`;
        break;
      case "Veeville Internship Program":
        const internData = formData as InternshipFormData;
        emailBody += `College: ${internData.collegeName}%0D%0A`;
        emailBody += `Internship Type: ${internData.internshipType}%0D%0A`;
        emailBody += `Period: ${internData.startDate} to ${internData.endDate}%0D%0A`;
        emailBody += `Portfolio: ${internData.portfolioLink}%0D%0A`;
        if (internData.whyVeeville)
          emailBody += `Why Veeville: ${internData.whyVeeville}`;
        break;
      case "Media Enquiries":
        const mediaData = formData as MediaFormData;
        emailBody += `Publication: ${mediaData.publication}%0D%0A`;
        emailBody += `Details: ${mediaData.details}`;
        break;
      case "Work at Veeville":
        const workData = formData as WorkFormData;
        emailBody += `Team: ${workData.team}%0D%0A`;
        if (workData.workExperience)
          emailBody += `Experience: ${workData.workExperience}%0D%0A`;
        if (workData.phone) emailBody += `Phone: ${workData.phone}%0D%0A`;
        if (workData.linkToWork)
          emailBody += `Portfolio: ${workData.linkToWork}%0D%0A`;
        emailBody += `Why Veeville: ${workData.whyVeeville}`;
        break;
    }

    // For now, simulate sending an email
    window.location.href = `mailto:getpersonal@veeville.com?subject=New ${formType} from ${formData.name}&body=${emailBody}`;
  };

  const renderFormFields = () => {
    switch (formType) {
      case "Request a Callback":
        return (
          <div className="grid gap-6">
            <FormField label="Your Name" required>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={inputStyles}
                required
              />
            </FormField>
            <FormField label="Email ID" required>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className={inputStyles}
                required
              />
            </FormField>
            <FormField label="Company Name" required>
              <Input
                id="companyName"
                name="companyName"
                value={(formData as CallbackFormData).companyName}
                onChange={handleChange}
                className={inputStyles}
                required
              />
            </FormField>
            <FormField label="Company Location">
              <Input
                id="companyLocation"
                name="companyLocation"
                value={(formData as CallbackFormData).companyLocation}
                onChange={handleChange}
                className={inputStyles}
              />
            </FormField>
            <FormField label="Tell Us More">
              <textarea
                id="message"
                name="message"
                value={(formData as CallbackFormData).message}
                onChange={handleChange}
                rows={4}
                className={textareaStyles}
              />
            </FormField>
          </div>
        );

      case "Veeville Internship Program":
        return (
          <div className="grid gap-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <FormField label="Your name" required>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={inputStyles}
                  required
                />
              </FormField>
              <FormField label="Email ID" required>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={inputStyles}
                  required
                />
              </FormField>
            </div>
            <FormField label="College Name" required>
              <Input
                id="collegeName"
                name="collegeName"
                value={(formData as InternshipFormData).collegeName}
                onChange={handleChange}
                className={inputStyles}
                required
              />
            </FormField>
            <FormField label="Type of Internship" required>
              <Select
                value={(formData as InternshipFormData).internshipType}
                onValueChange={(value: string) =>
                  handleChange({
                    target: { name: "internshipType", value },
                  } as any)
                }
              >
                <SelectTrigger className={selectTriggerStyles}>
                  <SelectValue placeholder="Please choose an option" />
                </SelectTrigger>
                <SelectContent className={selectContentStyles}>
                  <SelectItem value="design" className={selectItemStyles}>
                    Design
                  </SelectItem>
                  <SelectItem value="development" className={selectItemStyles}>
                    Development
                  </SelectItem>
                  <SelectItem value="marketing" className={selectItemStyles}>
                    Marketing
                  </SelectItem>
                </SelectContent>
              </Select>
            </FormField>
            <FormField label="Internship Period" required>
              <div className="grid sm:grid-cols-2 gap-4">
                <Input
                  type="date"
                  name="startDate"
                  placeholder="Start date"
                  value={(formData as InternshipFormData).startDate}
                  onChange={handleChange}
                  className={inputStyles}
                  required
                />
                <Input
                  type="date"
                  name="endDate"
                  placeholder="End date"
                  value={(formData as InternshipFormData).endDate}
                  onChange={handleChange}
                  className={inputStyles}
                  required
                />
              </div>
            </FormField>
            <FormField label="CV" required>
              <div className="relative">
                <Input
                  id="cv"
                  name="cv"
                  type="file"
                  onChange={handleFileChange}
                  accept=".pdf,.doc,.docx"
                  className={`${fileInputStyles} text-[#5a4a42]`}
                  required
                />
                <div className="absolute inset-0 flex items-center px-3 pointer-events-none">
                  {selectedFileName ? (
                    <span className="text-[#5a4a42] truncate">
                      {selectedFileName}
                    </span>
                  ) : (
                    <></>
                  )}
                </div>
                <Button
                  type="button"
                  className="absolute right-0 top-1/2 -translate-y-1/2 bottom-0 px-4 bg-[#5a4a42] hover:bg-[#333333] text-white rounded-r-md transition-colors duration-200"
                  onClick={() => document.getElementById("cv")?.click()}
                >
                  Browse
                </Button>
              </div>
            </FormField>
            <FormField label="Portfolio Link" required>
              <Input
                id="portfolioLink"
                name="portfolioLink"
                value={(formData as InternshipFormData).portfolioLink}
                onChange={handleChange}
                className={inputStyles}
                required
              />
            </FormField>
            <FormField label="Why Veeville?">
              <textarea
                id="whyVeeville"
                name="whyVeeville"
                value={(formData as InternshipFormData).whyVeeville}
                onChange={handleChange}
                rows={4}
                className={textareaStyles}
              />
            </FormField>
          </div>
        );

      case "Media Enquiries":
        return (
          <div className="grid gap-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <FormField label="Your Name" required>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={inputStyles}
                  required
                />
              </FormField>
              <FormField label="Email ID" required>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={inputStyles}
                  required
                />
              </FormField>
            </div>
            <FormField label="Publication" required>
              <Input
                id="publication"
                name="publication"
                value={(formData as MediaFormData).publication}
                onChange={handleChange}
                className={inputStyles}
                required
              />
            </FormField>
            <FormField label="More details" required>
              <textarea
                id="details"
                name="details"
                value={(formData as MediaFormData).details}
                onChange={handleChange}
                rows={4}
                className={textareaStyles}
                required
              />
            </FormField>
          </div>
        );

      case "Employee Verification":
        return (
          <div className="text-center py-4">
            <p className="text-gray-600">
              If you need any help with verifying the employment of a current or
              former Veeville employee, please email{" "}
              <a
                href="mailto:getpersonal@veeville.com"
                className="text-[#5a4a42] hover:text-[#333333] underline transition-colors duration-200"
              >
                getpersonal@veeville.com
              </a>
            </p>
          </div>
        );

      case "Work at Veeville":
        return (
          <div className="grid gap-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <FormField label="Full Name" required>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={inputStyles}
                  required
                />
              </FormField>
              <FormField label="Email Id" required>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={inputStyles}
                  required
                />
              </FormField>
            </div>
            <FormField label="Please choose a team" required>
              <Select
                value={(formData as WorkFormData).team}
                onValueChange={(value: string) =>
                  handleChange({
                    target: { name: "team", value },
                  } as any)
                }
              >
                <SelectTrigger className={selectTriggerStyles}>
                  <SelectValue placeholder="Please choose an option" />
                </SelectTrigger>
                <SelectContent className={selectContentStyles}>
                  <SelectItem value="design" className={selectItemStyles}>
                    Design
                  </SelectItem>
                  <SelectItem value="development" className={selectItemStyles}>
                    Development
                  </SelectItem>
                  <SelectItem value="marketing" className={selectItemStyles}>
                    Marketing
                  </SelectItem>
                </SelectContent>
              </Select>
            </FormField>
            <div className="grid sm:grid-cols-2 gap-6">
              <FormField label="Work Experience">
                <Input
                  id="workExperience"
                  name="workExperience"
                  value={(formData as WorkFormData).workExperience}
                  onChange={handleChange}
                  className={inputStyles}
                />
              </FormField>
              <FormField label="Phone Number">
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={(formData as WorkFormData).phone}
                  onChange={handleChange}
                  className={inputStyles}
                />
              </FormField>
            </div>
            <FormField label="Link To Work">
              <Input
                id="linkToWork"
                name="linkToWork"
                value={(formData as WorkFormData).linkToWork}
                onChange={handleChange}
                className={inputStyles}
              />
            </FormField>
            <FormField label="Upload CV" required>
              <div className="relative">
                <Input
                  id="cv"
                  name="cv"
                  type="file"
                  onChange={handleFileChange}
                  accept=".pdf,.doc,.docx"
                  className={`${fileInputStyles} text-[#5a4a42]`}
                  required
                />
                <div className="absolute inset-0 flex items-center px-3 pointer-events-none">
                  {selectedFileName ? (
                    <span className="text-[#5a4a42] truncate">
                      {selectedFileName}
                    </span>
                  ) : (
                    <>
                      <span className="text-[#5a4a42] font-medium">
                        Choose file
                      </span>
                      <span className="ml-2 text-gray-500">
                        or drag and drop
                      </span>
                      <span className="ml-auto text-xs text-gray-500">
                        .pdf, .doc, .docx
                      </span>
                    </>
                  )}
                </div>
                <Button
                  type="button"
                  className="absolute right-0 top-0 bottom-0 px-4 bg-[#5a4a42] hover:bg-[#333333] text-white rounded-r-md transition-colors duration-200"
                  onClick={() => document.getElementById("cv")?.click()}
                >
                  Browse
                </Button>
              </div>
            </FormField>
            <FormField label="Why Veeville?" required>
              <textarea
                id="whyVeeville"
                name="whyVeeville"
                value={(formData as WorkFormData).whyVeeville}
                onChange={handleChange}
                rows={4}
                className={textareaStyles}
                required
              />
            </FormField>
          </div>
        );
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-[#5a4a42] hover:bg-[#333333] text-white font-medium py-2 px-6 rounded-md transition-colors duration-200">
          Enquire Now
        </Button>
      </DialogTrigger>
      <DialogContent className="w-[95vw] max-w-[600px] h-[90vh] max-h-[800px] flex flex-col p-0">
        <DialogHeader className="px-6 pt-6 pb-4 border-b">
          <DialogTitle className="text-2xl font-semibold text-[#5a4a42]">
            How can we help you?
          </DialogTitle>
          <DialogDescription className="text-gray-600">
            Please fill out the form below and we'll get back to you as soon as
            possible.
          </DialogDescription>
        </DialogHeader>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col flex-1 overflow-hidden"
        >
          <div className="px-6 py-4 border-b">
            <FormField label="How can we help you?" required>
              <Select value={formType} onValueChange={handleFormTypeChange}>
                <SelectTrigger className={selectTriggerStyles}>
                  <SelectValue placeholder="Please choose an option" />
                </SelectTrigger>
                <SelectContent className={selectContentStyles}>
                  <SelectItem
                    value="Request a Callback"
                    className={selectItemStyles}
                  >
                    Request a Callback
                  </SelectItem>
                  <SelectItem
                    value="Veeville Internship Program"
                    className={selectItemStyles}
                  >
                    Veeville Internship Program
                  </SelectItem>
                  <SelectItem
                    value="Media Enquiries"
                    className={selectItemStyles}
                  >
                    Media Enquiries
                  </SelectItem>
                  <SelectItem
                    value="Employee Verification"
                    className={selectItemStyles}
                  >
                    Employee Verification
                  </SelectItem>
                  <SelectItem
                    value="Work at Veeville"
                    className={selectItemStyles}
                  >
                    Work at Veeville
                  </SelectItem>
                </SelectContent>
              </Select>
            </FormField>
          </div>
          <div className="flex-1 overflow-y-auto px-6 py-4">
            <div className="grid gap-6 pb-6">{renderFormFields()}</div>
          </div>
          <DialogFooter className="px-6 py-4 border-t mt-auto">
            <Button
              type="submit"
              className="bg-[#5a4a42] hover:bg-[#333333] text-white font-medium w-full sm:w-auto transition-colors duration-200"
            >
              Submit
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EnquiryForm;
