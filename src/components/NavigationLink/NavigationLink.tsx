import './NavigationLink.scss';

export interface NavigationLinkProps {
  title: string;
  icon?: string;
  link: string;
}

function NavigationLink({ title, icon, link }: NavigationLinkProps) {
  return (
    <a href={link} className="q-item" target="_blank" rel="noopener noreferrer">
      {icon && (
        <div className="q-item__section q-item__section--avatar">
          <i className={icon} style={{ fontStyle: 'normal', display: 'inline-block' }}></i>
        </div>
      )}
      <div className="q-item__section">
        <div className="q-item__label">{title}</div>
      </div>
    </a>
  );
}

export default NavigationLink;

