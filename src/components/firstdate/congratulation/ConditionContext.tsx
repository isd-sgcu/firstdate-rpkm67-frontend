import Image from 'next/image';
import Divider from '@public/congrats/divider.svg';
import ReactMarkdown from 'react-markdown';
import { conditionMarkdown } from '@/components/firstdate/congratulation/conditionMarkdown';
import {
  HeadingProps,
  LiProps,
  OrderedListProps,
} from 'react-markdown/lib/ast-to-react';
import { ReactMarkdownProps } from 'react-markdown/lib/complex-types';
import '@/components/firstdate/congratulation/style.css';
import React from 'react';

const StyledH1: React.FC<HeadingProps> = ({ children }) => {
  return (
    <h1 className="text-center font-medium whitespace-pre-wrap">{children}</h1>
  );
};

const StyledP: React.FC<ReactMarkdownProps> = ({ children }) => {
  return <p className="text-xs whitespace-pre-wrap">{children}</p>;
};

const StyledLI: React.FC<Omit<LiProps, 'ordered'>> = ({ children }) => {
  return <li className="text-xs whitespace-pre-wrap">{children}</li>;
};

const StyledOL: React.FC<OrderedListProps> = ({ children }) => {
  return (
    <ol
      className="flex flex-col pl-4 gap-3"
      style={{ listStyleType: 'decimal' }}
    >
      {children}
    </ol>
  );
};

const StyledHR: React.FC<ReactMarkdownProps> = ({ ...props }) => {
  return (
    <hr
      className="border border-project-dark-gray"
      {...props}
    />
  );
};

interface ConditionContextProps {
  handleOnClose: () => void;
}

const ConditionContext: React.FC<ConditionContextProps> = ({
  handleOnClose,
}) => {
  return (
    <>
      <span className="text-center font-athiti font-semibold text-2xl">
        เงื่อนไขการได้รับของรางวัล
      </span>
      <Image
        src={Divider}
        alt="divider"
        className="w-full h-4 bg-cover px-[20%] my-3"
      />
      <div className="flex flex-1 flex-col overflow-y-scroll font-athiti ml-[10%] mr-[9%] pr-1 whitespace-pre-line">
        <ReactMarkdown
          components={{
            h1: StyledH1,
            p: StyledP,
            li: StyledLI,
            ol: StyledOL,
            hr: StyledHR,
          }}
          className="flex flex-col text-base font-athiti gap-3"
        >
          {conditionMarkdown}
        </ReactMarkdown>
      </div>
      <Image
        src={Divider}
        alt="divider"
        className="w-full h-4 bg-cover px-[20%] mt-6"
      />
      <div className="w-full px-[15%] flex pt-6">
        <button
          className="w-full h-12 flex items-center justify-center rounded-lg bg-project-light-gray"
          onClick={handleOnClose}
        >
          <span className="font-athiti font-medium text-xl text-white">
            กลับ
          </span>
        </button>
      </div>
    </>
  );
};

export default ConditionContext;
