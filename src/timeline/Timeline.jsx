import './Timeline.css'

const Timeline = () => {
  return (
    <div className="timeline">
      <span>2:20</span>
      <form className='form'>
        <input type="range" className="time-range" id="time-range" min="0" step="1"/>
      </form>
      <span>4:40</span>
    </div>
  );
}

export default Timeline