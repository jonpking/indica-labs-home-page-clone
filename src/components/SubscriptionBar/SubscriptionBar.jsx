import './SubscriptionBar.css';

const SubscriptionBar = () => {
  return (
    <div id="subscriptionBarDiv">
      <div id="subscriptionFormWrapper">
        <form>
          <p>
            Subscribe to receive news about webinars, events, software releases
            and more.
          </p>
          <input placeholder="Enter your email"></input>
          <input placeholder="Enter your name"></input>
          <input placeholder="Enter country"></input>
          <button>Subscribe</button>
        </form>
      </div>
    </div>
  );
};

export default SubscriptionBar;
