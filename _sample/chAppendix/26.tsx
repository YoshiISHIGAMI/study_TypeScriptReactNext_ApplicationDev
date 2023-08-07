<button role="tab" aria-controls="accordion" aria-selected={isOpen} onClick={onClickTab}>
  クリックするとアコーディオンが開きます
</button>
<div role="tablist">
  <div id="accordion" aria-expanded={isOpen} aria-hidden={!isOpen}>
    ...
  </div>
</div>