import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import configData from '../config.json';
import Image from 'next/image';
import Link from 'next/link';

const Example = () => {
  const [show, setShow] = useState(false);
  const [movies, setMovies] = useState([]);
  const [modalCounter, setModalCounter] = useState(0);

  const closeModal = () => {
    setModalCounter((prevCounter) => prevCounter + 1);
    setShow(false);
  };

  const fetchMovies = async () => {
    let url = `${configData.SERVER_URL}modal_popup?_embed&production[]=77`;
    try {
      const response = await fetch(url);
      const data = await response.json();
        setMovies(data);
        console.log(data)
      if (data.length === 1) {
        setShow(true);
      }
      if (data.length === 0) {
        setShow(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // Fetch movies on initial load
    fetchMovies();

    // Check if the modal counter is less than 3
    const storedCounter = localStorage.getItem('modalCounter') || 0;
    const counter = parseInt(storedCounter, 10);

    if (counter < 3) {
      // Open the modal
      setShow(true);
    }
  }, []); // Dependency array is empty to ensure it runs only once on mount

  useEffect(() => {
    // Update the local storage when the modal counter changes
    localStorage.setItem('modalCounter', modalCounter);
  }, [modalCounter]);

  return (
    <>
      <Modal show={show} onHide={closeModal} animation={false} size="lg" centered>
        {movies.slice(0, 1).map((post) => (
          <div key={post.id}>
            <Modal.Header closeButton className="wbg-main pop-modal">
              <Modal.Title>{post.title.rendered}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <button type="button" className="btn-close pop-close" aria-label="Close" onClick={closeModal}></button>
              <Link href={post.acf.pop_url}><Image src={post.acf.modal_popup.url} width={200} height={200} className="img-fluid w-100" /></Link>
            </Modal.Body>
          </div>
        ))}
      </Modal>
    </>
  );
};

export default Example;