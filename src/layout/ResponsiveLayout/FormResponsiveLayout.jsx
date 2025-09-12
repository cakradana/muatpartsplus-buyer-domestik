import { HeaderResponsiveContainer } from "@/components/Header/Responsive";

import { cn } from "@/lib/utils";

/**
 * @typedef {Object} HeaderResponsiveFormTitle
 * @property {string} label
 * @property {string} className
 */
/**
 * @typedef {Object} HeaderResponsiveFormWithMenu
 * @property {() => void | undefined} onClickInfo
 * @property {() => void | undefined} onClickMenu
 * @property {() => void | undefined} onClickShare
 */
/**
 * @typedef {Object} HeaderResponsiveFormProps
 * @property {() => void | undefined} onClickBackButton
 * @property {HeaderResponsiveFormTitle | undefined} title
 * @property {HeaderResponsiveFormWithMenu | undefined} withMenu
 * @property {React.ReactNode} children
 * @property {"muatmuat" | "muattrans"} type
 */

/**
 * @param {HeaderResponsiveFormProps} props
 * @returns {React.ReactNode}
 */
const FormResponsiveLayout = ({ title, children, className }) => {
  return (
    <div className="min-h-screen bg-background">
      <HeaderResponsiveContainer className="relative h-[62px] bg-muat-parts-member-900 px-4">
        <img
          src="/icons/falin-star.svg"
          alt=""
          className="absolute right-0 top-1/2 -translate-y-1/2 transform"
        />
        <div className="absolute inset-x-0 flex h-full items-center justify-center">
          <h1 className="text-md font-bold text-white">{title}</h1>
        </div>
      </HeaderResponsiveContainer>

      <main
        className={cn("min-h-[calc(100vh-62px)] px-4 pt-[21px]", className)}
      >
        {children}
      </main>
    </div>
  );
};

export default FormResponsiveLayout;
