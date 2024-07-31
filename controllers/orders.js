const Order = require('../models/order');
const Product = require('../models/product');

exports.getAllOrders = async (req, res) => {
    try {
        const orders = await Order.findAll();
        res.json(orders);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving orders', error: error.message });
    }
};

exports.createOrder = async (req, res) => {
    try {
        const { userId, products } = req.body;

        // Calculate total
        let total = 0;
        for (let item of products) {
            const product = await Product.findByPk(item.productId);
            if (!product) {
                return res.status(400).json({ message: `Product with id ${item.productId} not found` });
            }
            total += product.price * item.quantity;
        }

        const newOrder = await Order.create({ userId, products, total });
        res.status(201).json(newOrder);
    } catch (error) {
        res.status(400).json({ message: 'Error creating order', error: error.message });
    }
};

exports.getOrder = async (req, res) => {
    try {
        const order = await Order.findByPk(req.params.id);
        if (order) {
            res.json(order);
        } else {
            res.status(404).json({ message: 'Order not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving order', error: error.message });
    }
};

exports.updateOrder = async (req, res) => {
    try {
        const { userId, products } = req.body;

        // Calculate total
        let total = 0;
        for (let item of products) {
            const product = await Product.findByPk(item.productId);
            if (!product) {
                return res.status(400).json({ message: `Product with id ${item.productId} not found` });
            }
            total += product.price * item.quantity;
        }

        const [updated] = await Order.update({ userId, products, total }, {
            where: { id: req.params.id }
        });

        if (updated) {
            const updatedOrder = await Order.findByPk(req.params.id);
            res.json(updatedOrder);
        } else {
            res.status(404).json({ message: 'Order not found' });
        }
    } catch (error) {
        res.status(400).json({ message: 'Error updating order', error: error.message });
    }
};

exports.deleteOrder = async (req, res) => {
    try {
        const deleted = await Order.destroy({
            where: { id: req.params.id }
        });
        if (deleted) {
            res.json({ message: 'Order deleted successfully' });
        } else {
            res.status(404).json({ message: 'Order not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error deleting order', error: error.message });
    }
};