import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import configData from '../config.json';
import Image from 'next/image';

const Example = () => {
  const [show, setShow] = useState(false);
  const [movies, setMovies] = useState([]);
  const [modalCounter, setModalCounter] = useState(0);

  const closeModal = () => {
    setShow(false);
  };

  const fetchMovies = async () => {
    let url = `${configData.SERVER_URL}modal_popup?_embed&production[]=78`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      setMovies(data);
      if (data.length === 1) {
        setShow(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const storedCounter = localStorage.getItem('modalCounter') || 0;
    const counter = parseInt(storedCounter, 10);

    if (counter < 3) {
      // Open the modal
      setShow(true);
      // Increment the counter
      setModalCounter(counter + 1);
    }
  }, []);

  useEffect(() => {
    // Update the local storage when the modal counter changes
    localStorage.setItem('modalCounter', modalCounter);
  }, [modalCounter]);

  useEffect(() => {
    fetchMovies();
  }, []); // Fetch movies on initial load

  return (
    <>
      <Modal show={show} onHide={closeModal} animation={false} size="lg">
        {movies.map((post) => (
          <div key={post.id}>
            <Modal.Header closeButton className="wbg-main pop-modal">
              <Modal.Title>{post.title.rendered}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Image src={post.acf.modal_popup.url} width={200} height={200} className="img-fluid w-100" />
            </Modal.Body>
          </div>
        ))}
      </Modal>
    </>
  );
};

export default Example;