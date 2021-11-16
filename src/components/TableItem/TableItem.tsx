import React, { FC } from 'react';
import './TableItem.scss';
import ButtonLink from '../ButtonLink';
import { wordToPascalCase } from '../../libs/wordToPascalCase';
import { toSmallUrl } from '../../libs/toSmallUrl';

interface TableItemProps {
  id: number;
  name: string;
  type: string;
  status: string;
  siteUrl: string;
}

const TableItem: FC<TableItemProps> = ({ id, name, type, status, siteUrl }) => {
  const btnName = status.toLowerCase() === 'draft' ? 'Finalize' : 'Results';
  const btnClassColor = status.toLowerCase() !== 'draft' ? 'btn-green' : 'btn-gray';
  const shortUrl = toSmallUrl(siteUrl);

  const color = shortUrl.includes('market')
    ? 'table-item__red'
    : shortUrl.includes('games')
    ? 'table-item__purple'
    : 'table-item__lightPurple';

  return (
    <div className="table-item_wrapper">
      <div className={`table-item_color-element ${color}`} />
      <span className="table-item__name">{name}</span>
      <span className="table-item__type">
        {type !== 'MVT' ? wordToPascalCase(type).replace(/_/gm, '-') : type}
      </span>
      <span className={`table-item__status status-${status.toLowerCase()}`}>
        {wordToPascalCase(status)}
      </span>
      <span className="table-item__site">{shortUrl}</span>
      <ButtonLink
        href={`${btnName.toLowerCase()}/${id}`}
        className={btnClassColor}
        text={btnName}
      />
    </div>
  );
};

export default React.memo(TableItem);
