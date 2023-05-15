import React from 'react'
import { Link } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import iconGitHub from "../../../../assets/iconGitHub.svg";
import { useTranslation } from 'react-i18next';

const RepoContent = ({github}) => {
  const { t } = useTranslation();
  return (
    <div
          onMouseEnter={() => setEnter(true)}
          className="flex items-center justify-center pt-[40px] gap-[7px]"
        >
          <Link to={github}>
            <img
              onMouseEnter={() => setEnter(true)}
              data-tooltip-id="my-tooltip"
              data-tooltip-content={t('tooltip')}
              className="h-[30px] cursor-pointer"
              src={iconGitHub}
              alt="icon github"
            />
          </Link>
          <Tooltip id="my-tooltip" />
        </div>
  )
}

export default RepoContent