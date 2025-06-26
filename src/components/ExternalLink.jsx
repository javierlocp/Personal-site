function ExternalLink({ href, children, className="" }){
  return(
    <a 
      href={href}
      target="_blank"
      rel="noopener"
      className={className}
      >
      {children}
    </a>
  );
}

export default ExternalLink